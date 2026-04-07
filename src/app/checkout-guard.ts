import { CanDeactivateFn } from '@angular/router';
import { Cart } from './cart/cart';

export const checkoutGuard: CanDeactivateFn<Cart> = () => {
  const confirmation = confirm(
    'You have pending items in your cart. Do you want to continue?'
  );
  return confirmation;
};
