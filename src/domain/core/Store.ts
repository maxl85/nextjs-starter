import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export default class Store {
  cartVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  showCart(show: boolean) {
    this.cartVisible = show;
  }

  public hydrate!: (data: unknown) => void;
}
