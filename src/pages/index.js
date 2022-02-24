import  Script  from 'next/script'

import Header from '@/components/Header'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import items from '@/assets/items'

export default function Home() {
  
  return (
    <>
     <Header />
      <div className="container row">
        {
          items.map((item, i) => {
            return (
              <Card
                i={i}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                cover={item.image}>
              </Card>
            )
          })
        }
      </div>
      <Footer />


        <Script src="https://cdn.splitbee.io/sb.js" />
      
    </>
  )
}