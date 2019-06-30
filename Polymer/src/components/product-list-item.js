import { LitElement, html, css } from 'lit-element';
import sharedStyles from '../components/shared-styles';

class ProductsListItem extends LitElement {
  static get styles () {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin: 0 48px;
        }
        shop-image {
          margin: 32px 0 16px;
        }
        shop-image::before {
          content: "";
          display: block;
          padding-top: 100%;
        }
        .title {
          color: black;
          font-weight: bold;
        }
        .price {
          color: black;
        }
        @media (max-width: 765px) {
          :host {
            margin: 0 12px;
          }
        }
      `
    ]
  }

  render() {
    const item = this.item || {};
    return html`
      <router-link page-id="product" params="productId: ${this.item._id}">
        <shop-image src="${item.image}" alt="${item.title}"></shop-image>
        <div class="title">${item.title}</div>
        <span class="price">${item.price ? `$${item.price.toFixed(2)}` : null}</span>
      </router-link>
    `;
  }

  static get properties() {
    return {
      item: Object
    }
  }
}

customElements.define('product-list-item', ProductsListItem);