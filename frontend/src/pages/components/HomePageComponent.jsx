import CategoryCardComponent from "../../Component/CategoryCardComponent"
import ProductCaroselComponent from "../../Component/ProductCaroselComponent"
import { Row, Container } from "react-bootstrap"
import MetaComponent from "../../Component/MetaComponent"

import { useEffect,useState } from "react"


const HomePageComponent= ({ categories,getBestsellers }) => {

    const [mainCategories, setMainCategories] = useState([]);
    const [bestsellers,setBestSellers]=useState([])

    useEffect(() => {
      getBestsellers()
      .then((data)=>{
        setBestSellers(data)
      })
      .catch((err)=>console.log(err.response.data.message?err.response.data.message:err.response.data))
        setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")));
    }, [categories])

  return (
   <>
   <MetaComponent />

   <ProductCaroselComponent bestsellers={bestsellers} />
   <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
      
   
   </>
  )
}

export default HomePageComponent