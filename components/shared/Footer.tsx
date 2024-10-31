import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center justify-center align-middle wrapper  p-5 text-center sm:flex-row">
        <Link href='/'>
          <p>2024 ScremeAds. All Rights reserved.</p>
        </Link>

      </div>
    </footer>
  )
} 

export default Footer