import ProductPage from "./products/page";

export default function Home() {
  return (
    <>
      <div className="text-6xl py-10 border-b">
        <p className="marquee">
          <span>Welcome to Rafflesia Photo Studio! Available on Shopee </span>
        </p>
      </div>

      <ProductPage />
    </>
  )
}