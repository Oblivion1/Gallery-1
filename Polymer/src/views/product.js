import { html, css } from 'lit-element';
import { PageViewElement } from '../components/page-view-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { repeat } from 'lit-html/directives/repeat.js';

import { 
  getProduct
} from '../actions/products';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-button';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import '../components/product-list-item';
import '../components/shop-image';
import SharedStyles from '../components/shared-styles';
import { store } from '../store';

class ProductPage extends connect(store)(PageViewElement) {
	static get styles() {
		return [
      SharedStyles,
      css`
        #content {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        shop-image {
          position: relative;
          margin: 64px 32px;
          width: 50%;
          max-width: 600px;
        }
        shop-image::before {
          content: "";
          display: block;
          padding-top: 100%;
        }
        .detail {
          margin: 64px 32px;
          width: 50%;
          max-width: 400px;
          transition: opacity 0.4s;
          opacity: 0;
        }
        .detail[has-content] {
          opacity: 1;
        }
        h1 {
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          margin: 0;
        }
        .price {
          margin: 16px 0 40px;
          font-size: 16px;
          color: var(--app-secondary-color);
        }
        .description {
          margin: 32px 0;
        }
        .description > h2 {
          margin: 16px 0;
          font-size: 13px;
        }
        .description > p {
          margin: 0;
          color: var(--app-secondary-color);
        }
        .pickers {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #ccc;
        }
        /* Add more specificity (.pickers) to workaround an issue in lit-element:
          https://github.com/PolymerLabs/lit-element/issues/34 */
        .pickers > shop-select > select {
          font-size: 16px;
          padding: 16px 24px 16px 70px;
        }
        @media (max-width: 765px) {
          #content {
            flex-direction: column;
            align-items: center;
          }
          shop-image {
            margin: 0;
            width: 80%;
          }
          .detail {
            box-sizing: border-box;
            margin: 32px 0;
            padding: 0 24px;
            width: 100%;
            max-width: 600px;
          }
          h1 {
            font-size: 20px;
            line-height: 24px;
          }
          .price {
            font-size: inherit;
            margin: 12px 0 32px;
          }
        }
      `
		]
	}

  static get properties () {
    return {
      _category: String,
      _products: Array,
      _banner: String,
      _title: String
    }
  }

	render() {
    return html`
      <div id="content">
        <shop-image src=""></shop-image>
        <div class="detail" has-content>
          <h1>${'this._item.title'}</h1>
          <div class="price">${1}</div>
          <div class="pickers">
            <paper-dropdown-menu label="Size">
              <paper-listbox slot="dropdown-content" selected="2">
                ${['XS','S','M','L','XL'].map(version => html`
                  <paper-item>${version}</paper-item>
                `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <div class="description">
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ullam dignissimos nesciunt quasi quisquam, quo similique. Corrupti optio, quo suscipit fugit veritatis omnis ad, exercitationem mollitia, sunt aperiam et. Ipsam.</p>
          </div>
          <paper-button>
            Add to cart
          </paper-button>
        </div>
      </div>
		`
  }

  stateChanged() {

  }
}

window.customElements.define('product-page', ProductPage);