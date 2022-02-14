import '../css/app.css';

import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';

const layout = Layout();
const content = layout.querySelector('article');
const pages = {
  home: Home(),
  about: About(),
  menu: Menu(),
  contact: Contact()
}

content.append(pages.home);

document.body.append(layout)

layout.querySelectorAll('nav a').forEach(link=>link.addEventListener("click", (e)=>{
  while(content.firstChild) content.firstChild.remove();
  content.append(pages[e.currentTarget.dataset.page])
}))