interface IGrowl
{
  duration?: number;
  location?: 'default' | 'tl' | 'tr' | 'bl' | 'br' | 'tc ' | 'bc' | 'cc' | 'cl' | 'cr ';
  style?: 'default' | 'error' | 'notice' | 'warning';
  size?: 'small' | 'medium' | 'large';
  title?: string;
}

export class Growl
{
  private static growlDefault: IGrowl = {
    duration: 3200,
    location: 'tr',
    style: 'error',
    size: 'small',
  };

  public static notice(message: string, settings: IGrowl = {}): void
  {
    settings.style = 'notice';
    settings.title = 'Notice';
    this.addGrowls(message, settings);
  }

  public static warning(message: string, settings: IGrowl = {}): void
  {
    settings.style = 'warning';
    settings.title = 'Warning';
    this.addGrowls(message, settings);
  }

  public static error(message: string, settings: IGrowl = {}): void
  {
    settings.style = 'error';
    settings.title = 'Error';
    this.addGrowls(message, settings);
  }

  private static addGrowls(message: string, settings: IGrowl = {}): void
  {
    const growl = {...this.growlDefault, ...settings};

    this.show(growl, message);
  }

  public static show(growl: IGrowl, message: string): void
  {
    const id: string = `growl-id-${Math.random()}`;

    const growlHtml = `<div id="${id}" class="growl ${growl.style} ${growl.size}" style="opacity: 0">
                          <div class="growl-close" id="growl-close">×</div>
                          <div class="growl-title">${growl.title}</div>
                          <div class="growl-message">${message}</div>
                       </div>
                      `;

    const growls = document.getElementById('growl-id');
    setTimeout(() =>
    {
      document.getElementById(id).style.opacity = '1';
    }, 1);

    growls.insertAdjacentHTML('afterbegin', growlHtml);
    document.getElementById('growl-close').addEventListener('click', remove);

    const show = document.getElementById(id);
    show.addEventListener('mouseover', stop);
    start();

    let timeout: number;

    function start(): void
    {
      timeout = setTimeout(remove, Growl.growlDefault.duration);
    }

    function stop(): void
    {
      clearTimeout(timeout);

      show.addEventListener('mouseout', start);
    }

    function remove(): void
    {
      if (document.getElementById(id) !== null)
      {
        document.getElementById(id).style.opacity = '0';
      }
      setTimeout(() =>
      {
        if (document.getElementById(id) !== null)
        {
          document.getElementById(id).remove();
        }
      }, 1000);
    }
  }

  public static init(): void
  {
    const div = `<div id="growl-id" class="growls-${this.growlDefault.location}"></div>`;
    document.body.insertAdjacentHTML('afterbegin', div);
  }
}