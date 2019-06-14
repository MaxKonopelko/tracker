export class BrowserStorage<T>
{
  public key: string;

  constructor(key: string)
  {
    this.key = key;
  }

  public setObject(value: T): void
  {
    const str = JSON.stringify(value);
    localStorage.setItem(this.key, str);
  }

  public getObject(): T
  {
    const item = localStorage.getItem(this.key);

    try
    {
      return JSON.parse(item);
    }
    catch (e)
    {
      return null;
    }
  }

  public clear(): void
  {
    localStorage.removeItem(this.key);
  }

  public clearAll(): void
  {
    localStorage.clear();
  }
}