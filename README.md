 Building the Tesla Clone with ReactJS (Redux + Styled Components)
 https://youtu.be/lUeS9Wsj6dk


# Criar projeto e limpar
```js
npx create-react-app tesla-clone --template redux
```

abrir aplicacao
```js
cd tesla-clone
npm start
```

07:20 Edit App.js

```
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```
07:30 limpe o conteudo do index.css

# Header
09:21 criar pasta components
```js
md .\src\components
```

09:27 criar arquivo src\components\Header.js
```js
Header.js
```

09:39 Instalar ES7 React/Redux 

10:00 Editar Header
```
import React from 'react'

function Header() {
    return (
        <div>
            header
        </div>
    )
}

export default Header
```

10:37 Add App.js
```js
import Header from "./components/Header"
```
```js
<Header />
```
Rode Aplicação

# 12:00 Section
12:30 Edite index.css

```
* {
  box-sizing: border-box;
  font-family: "Rubik", sans-serif; 
  color: #393c41; 
  margin: 0; 
  padding: 0;
}

body {
  width: 100%;
}
```

13:10 Crie arquivo components\Home.js

```
Home.js
```


```
import React from 'react'

function Home() {
    return (
        <div>
            Home
        </div>
    )
}

export default Home

```

Add App.js
```js
import Home from './components/Home'
```

```js
<Home />
```
# 14:00 instalar styled-components
14:00 instalar styled-components


```js
yard add styled-components
```
```js
npm i styled-components
```


Altere Home.js
```js
import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            Home
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
```

16:50 components\Section.js
```js
Section.js
```
```js
import React from 'react'

function Section() {
    return (
        <div>
            Section
        </div>
    )
}

export default Section

```

17:20 Altere Home
```js
import Section from './Section'
```
```js
<Section />
```
rode

# Fundo laranja
20:00 Altere Section
```js
import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw; 
    height: 100vh; 
    background: orange;
`
```
Rode

# adicionar imagens
```js
https://drive.google.com/drive/folders/1vViHSvgR6kxZr1AUDPTEJLiV1HwNBm9L
```

Adicione pasta images em public

# mude o fundo

Edit section.js
```js
const Wrap = styled.div`
    width: 100vw; 
    height: 100vh; 
    background-position: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
`
```
Rode


# 25:00 Adicionar ItemText
```js
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
```
```js
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
```
Rode

# 28:00 Adicionar Botões
```
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
```

```

const ButtonGroup = styled.div`
    display: flex;
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px; 
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
`

const RightButton = styled (LeftButton)`

`
```
Rode



# 35:00 Add Wrap Section
```js
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
```
Rode

# 36:00 Edit botões
Add ButtonGroup
```js
    margin-bottom: 30px;
```

Edit LeftButton
```js
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px; 
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-tranform: uppercase;
    font-size: 12px;
    cursor: pointer;
```

# 38:00 Add DownArrow

```js
<DownArrow src="/images/down-arrow.svg" />
```

```js
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
`
```
# 40:00 

DownArrow
```js
    animation: animaDown infinite 1.5s;
```

LeftButton
```js
    margin: 8px;
```

# 41:00 
Add index.css
```js
@keyframes animateDown {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  
  40% {
  transform: translateY(5px);
  }
  
  60% {
  transform: translateY( 3px);
  }
}
```

42:00 Add DownArrow
```js
overflow-x: hidden;
```

43:00 Add index.css / body
```js
overflow-x: hidden;
```

45:00 Add Section.js / RightButton
```js
    background: white;
    opacity: 0.65;
    color: black;
```


45:00 Add Section.js / ButtonGroup
```js
@media (max-width: 768px){
    flex-direction: column;
}
```

46:00 Add Index.css
```js
    <Section />
```

49:00 Add Index.css
```js
    title="Model S"
    description="Order Online for Touchless Deliver"
    backgroundImg="model-s.jpg"
    leftBtn Text="Custom order"
    rightBtnText="Existing inventory"
```


49:00 add Section
```js
    title="Model S"
    description="Order Online for Touchless Deliver"
    backgroundImg="model-s.jpg"
    leftBtn Text="Custom order"
    rightBtnText="Existing inventory"
```

51:00 swap Section
```js
function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    { leftBtnText }
                </LeftButton>
                <RightButton>
                    { rightBtnText }
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}
```

54:00 Altere Home
```js
            <Section 
                title="Model Y"
                description="Order Online for Touchless Deliver"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Deliver"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Deliver"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
```


55:00 Add Section
```js
, backgroundImg
```

```js
<Wrap bgImage={backgroundImg}>
```
```js
background-image: ${props => `url("/images/${props.bgImage}")`}
```

1:00:00  Add Home
```js
<Section 
    title="Lowest Cost Solar Panels in America"
    description="Money-back guarantee"
    backgroundImg="solarpanel.jpg"
    leftBtnText="Order now"
    rightBtnText="Lear more"
/>
<Section 
    title="Solar for New Roofs"
    description="Solar Roof Costs Less Than a New"
    backgroundImg="solar-roof.jpg"
    leftBtnText="Order now"
    rightBtnText="Lear more"
/>
<Section 
    title="Acessories"
    description=""
    backgroundImg="accessories.jpg"
    leftBtnText="Shop now"
/>
```

1:01:00  Add Section
```js
    { rightBtnText &&
```
# coloque logo
1:01:00 substitua Header
```js
import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>

            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
`

const Menu = styled.div`

`
```
1:08:00  Edit App, retire comentários
```js
    <Header />
```
# coloque menu
1:09:00  Add Header
```js
<a href="#">Model S</a>
<a href="#">Model 3</a>
<a href="#">Model X</a>
<a href="#">Model Y</a>
```
rode

# menu css
1:12:00 Add index.css
```js
a {
    text-decoration: none;
}
```

1:14:00 Add Header.js Menu
```js
display: flex;
align-items: center;

a {
    font-weight: 600;
    text-transofrm: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
```

1:17:00 Add Header.js Container
```js
top: 0;
left: 0;
right: 0;
```

# menu Direita

1:19:00 Add Header.js
```js
<RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla Account</a>
</RightMenu>
```
1:21:00 Add Header.js RightMenu
```js
    a {
        font-weight: 600;
        text-transofrm: uppercase;
        margin-right: 10px;
    }
```

# icon menu
1:22:00 Add Header.js
```js
    import MenuIcon from '@material-ui/icons/Menu';
```
1:22:00 Istalar @material-ui
```js
    yarn add @material-ui/core
    yarn add @material-ui/icons
```
```js
    npm install @material-ui/core
    npm install @material-ui/icons
```
1:26:00
```js
    <CustomMenu />
```

1:27:00
```js
const CustomMenu = styled(MenuIcon)`
    cursor: pointer
`
```

1:27:00
```js
    @media(max-width: 768px){
        display: none;
    }
```
# install reveal
1:28:00
```js
    npm i react-reveal --save
```

1:30:00 Add Section
```js
    import Fade from 'react-reveal/Fade'
```
1:31:00 Add Section
```js
    <Fade bottom>
    </Fade>
```
# BurgerNav
1:32:00 Add Header.js
```js
    <BurgerNav>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
    </BurgerNav>
```

1:35:00 Add Header.js
```js
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
`
```

1:36:00 Add Section.js Wrap
```js
    z-index: 10;
```

1:37:00 Add Section.js ItemText
```js
    z-index: -1;
```

1:38:00 Add Home.js Container
```js
    z-index: -1;
```

1:39:00 Add Header.js Container
```js
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
```
1:44:00 Add Header CloseIcon;
```js
    import CloseIcon from '@material-ui/icons/Close'
```

```js
    <CustomClose />
```

```js
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
```

```js
<CloseWrapper>
    <CustomClose />
</CloseWrapper>
```

```js
const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`
```

1:44:00
```js
, {useState}
```

1:49:00
```js
    const [burgerStatus, setBurgerStatus] = useState(false);
```

1:49:30
```js
<BurgerNav show={burgerStatus}>
```

1:50:00 BurgerNav
```js
transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
```

1:53:00
```js
<CustomMenu onClick={()=>setBurgerStatus(true)} />
<CustomMenu onClick={()=>setBurgerStatus(true)} />
```
1:55:00 BurgerNav
```js
transition: transform 0.2s;
```

1:58:00 Criar Pasta
```js
md .\src\features\car
```

1:58:30 Deletar Pasta Counter
```js
rmdir .\src\features\Counter\ 
```

1:59:00 Criar arquivo
```js
carSlice.js
```
1:59:00 Add carSlice.js
```js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model y"]
}

const carslice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.carsy

export default carslice. reducer
```

2:03:00 Swap store.js
```js
import carReducer from '../features/car/carSlice'
```
```js
car: carReducer,
```

2:05:00 Swap store.js
```js
import {selectCars} from '../features/car/carSlice'
```
```js
import {useSelector} from 'react-redux'
```
```js
const cars = useSelector(selectCars)
```
2:08:00
```js
{cars && cars.map((car, index)=>(
    <a key={index} href="#">{car}</a>
))}
```

2:09:00
```js
{cars && cars.map((car, index) => (
    <li key={index} href="#">{car}</li>
))}
```