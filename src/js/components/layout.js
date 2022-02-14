import toHtml from "../utilities/toHtml";

const Layout = ()=>toHtml(`<main id="content" class="">
<header class="fixed top-0 left-0 text-2xl h-40 bg-indigo-200 rounded-md w-full flex flex-col items-center">
  <h1 class="text-5xl font-black italic">Felafel House</h1>
  <p class="font-semibold italic text-indigo-800">Because where else you gonna go?</p>
  <nav class='site-nav w-full m-6'>
    <ul class="flex justify-around">
      <li><a data-page='home' href='#home'>Home</a></li>
      <li><a data-page='about' href='#about'>About</a></li>
      <li><a data-page='menu' href='#menu'>Menu</a></li>
      <li><a data-page='contact' href='#contact'>Contact</a></li>
    </ul>
  </nav>
</header>
<article class="fixed left-0 top-44 h-4/5 overflow-scroll">
</article>

</main>`)

export default Layout;