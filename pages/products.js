import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'
import Image from 'next/image'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Orchard Beach Community Group</title>
        <meta name="description" content="How much we charge and what you get from it." />
      </Head>

      {products.map (product => (
        <div className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Rows}>
                <div className={styles.product__ColImg}>
                  <Image width="50px" height="50px" src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return {
    props: {
        products
    }
  }
}