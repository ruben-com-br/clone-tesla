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