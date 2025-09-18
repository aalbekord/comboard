import './App.css'
import Card from "./components/Card"
function App() {
  return (
    <>
      <div className="banner">
        <img src="https://static.vecteezy.com/system/resources/previews/002/876/939/non_2x/bubble-milk-tea-design-collection-pearl-milk-tea-boba-milk-tea-yummy-drinks-coffees-with-doodle-style-banner-illustration-vector.jpg" alt="boba banner" className="bannerImage" />
        <h1 className="projectName">Boba Board</h1>
      </div>
      <div className="cardsContainer">
      <Card 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSzhAj494O7WQYd-TYcsorYlCJhG6JiOb4A&s" 
          name="Boba Time" 
          website="https://itsbobatime.com/"
        />
        <Card 
          img="https://myfavoritea.com/wp-content/uploads/2021/06/FAVORITEA-CAFE-%E8%AE%BE%E8%AE%A1%E6%8F%90%E6%A1%88%E7%A8%BF%E4%BB%B6-6-1024x621.jpg"
          name="Favoritea"
          website="https://myfavoritea.com/"
        />
        <Card 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_8bq9Y2ni5vblKuENvAy5Qm9ik8m53kp9g&s"
          name="Teaspoon"
          website="https://www.teaspoonlife.com/"
        />
        <Card 
          img="https://franchise.sharetea.com.au/wp-content/uploads/2021/08/Favicon.png"
          name="Sharetea"
          website="https://www.1992sharetea.com/"
        />
        <Card 
          img="https://www.bixbyvillageplaza.com/uploads/2/4/4/1/24416620/cha-for-tea-bvp-logo-website_orig.png"
          name="Cha For Tea"
          website="https://www.chafortea.com/"
        />
        <Card 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdyhw9mHUYmEnU89lRZE_swh6vSXlJALV8Q&s"
          name="The Boba Bar"
          website="https://www.thebobabar-us.com/"
        />
        <Card 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOSlMYK-AquIEuR9wIkyZzpTcCHg566y_3A&s"
          name="ChiCha San Chen"
          website="https://chichasanchennorcal.com/"
        />
        <Card 
          img="https://images.seeklogo.com/logo-png/43/2/heytea-logo-png_seeklogo-436918.png"
          name="Hey Tea"
          website="https://www.heytea.com/"
        />
        <Card 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Ijx1TzXHKSLnPY4X_cGbwwiP0zb2znIZQ&s"
          name="TP Tea"
          website="https://en.tp-tea.com/"
        />
        <Card 
          img="https://storage.googleapis.com/takeapp/media/cltajh4dm00010fkxfkhk0old.png"
          name="Boba Loca"
          website="https://bobaloca.restaurants-us.com/"
        />
      </div>
    </>
  )
}

export default App
