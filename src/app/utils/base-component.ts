export abstract class BaseComponent<Config> {
  protected abstract config: Readonly<Config>;
}
