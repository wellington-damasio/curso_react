import './App.css';
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Img1 from './assets/img1.png'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import UserDetails from './components/UserDetails';
import userList from './assets/userList';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos!</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>

      {/* Img em public */}
      <div>
        <img src="/julien.jpg" alt="Something" />
      </div>

      {/* Img em assets */}
      <div>
        <img src={Img1} alt="Imagem aleatoria" />
      </div>

      <ManageData/>

      <ListRender/>

      <ConditionalRender/>

      <ShowUserName name="Samara"/>

      <CarDetails brand="Honda" model="Civic" color="black" km={10000}/>
      <CarDetails brand="Fiat" model="Uno" color="gray" km={5000}/>

      {userList.map(user => (
        <UserDetails key={user.id} firstName ={user.firstName} 
          lastName={user.lastName} age={user.age} profession={user.profession}/>
      ))}

      <Fragment name="Leandro"/>

      <Container>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia repellendus
           nobis necessitatibus a corrupti modi asperiores blanditiis mollitia eveniet 
           expedita. Minus eligendi earum ab consequuntur perferendis vitae quisquam aut
          ipsa.
        </p>
      </Container>
    </div>
  );
}

export default App;
