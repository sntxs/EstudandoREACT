
function Saudacao({nome}) {

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        
        <>
        <p>{gerarSaudacao(nome)}</p>
        
        <a href="https://www.youtube.com/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA5CAMAAAA7tUSkAAAAn1BMVEX////+AAAAAAAoKCgkJCR1dXUdHR37AAAgICAVFRX19fXq6uqdnZ35+fmLi4saGho8PDxHR0dMTExBQUFZWVmnp6fyAABmZmYQEBDZ2dl/f39tbW0xMTHNzc0ICAjwVFazs7PExMT99PTzyMf10M3wsbDwnZvxiIfvc3TwYmTzT1PxQUPwNzbzLSvvGhfuVFDri4z24N7zvb3uXVrro6CJh+DnAAADjklEQVRYhe2WDXOiMBCGYxIgfBlUQFCgYK3WFr2i/f+/7XYD9ROrvV5n7mZ4RyGEsE+y2V0gpFOnTp06dfpHNJs/LZbPq9XLa1muN6h1Wb7+2q2el4unuftT2EVoKPV6+IN/r/6roxGGi3qYZVluc7bazFgHHfVOEm/Yjn1D+5/IMN7UOCYjDc++KVstTU3RiMaHXk0KrxVbheEtcFgpCzof4LI4N51WruScMcY5P+HqvJ27+ByqwMrTecYy8GBM2bHdI0LieQDG4z3c1R3cFQ60M0ZTQoKIiVZDIJeyc19c5ZaniF6L041XNXKgHKzp+vRvcDcnhPWmbbM3amRfijEhCY9yuLDi1L6fG6dNNrpxWm+CG55wd+4yvFizEaqnUsoT5W2buFMK8tDESEoINycT2F1zPWn6MM1IpxZyR9YIBqdq6hm0WAGt2THXMB4gwH+FhnHGnak5UhbZRQZw4kfMzJiIYMkDISCtHJMduCMukCuZ4rLBgHKGT5EJ3M/qeK+Mcy4h2007dyyywjFlH1bOIieVTE5w1/kNru4XQ45JYMNjQexxsNDK/Shh+/46gSGUpaMJ8NhEx+lPdIzsO7hETTRXmQhDJdaB6sLPSrPn42rScGMqtAEXFhkqw4GJhm9yMa5sdaMvsZ2bOOkrXFKtD9ymYBGCBQlNJhwjG7nxfVyLMnBu3c4jxq5xYbnhpZ/Rs7BDUKrZV7kZxsJYoIeLmtu2v++YS5d+JgVlaP7rXLfhskSb+vzKeh/LsD2eiS0ZH5HvcDmlmRmZLflbrULjSv5CReBi+i1uEoCc4KJePbydXH9wyYE7/hNuHVewv6N9AV2fIoy298L6jOvt49n+Sh5N6rYTYIF/ueRccB/OuL74YBHIZQzSG9wYKxUO4hicGb5Il7e5veUZFwxAaR6qlfqCMRePBy7cSLCQNfVK2JiAsCVQtWBQX9Ursm117anvt2dccBtPBmArV8viTHrJEXcCXUk2ShoupzqOcbHeMD4EzwT4IixvYvfbS1hEfVWpqalLSadqDlJEme1limtSB70KXbqdRMCFF2Z/SnUdp0jSLMLHxnVFvPZd9/FJu6n2XEiCvC7V/bE/Keqm5vdtkgcOfHw5QYDv2RS6LOxySREEMck1rR5rO9Nxv2iMue+7MqxlHEv1lLv3H/twR/ZsVlXz+SNou93iaT6vqtns9pOdOnXq1KlTp/9FvwEUtVJVkEoE2wAAAABJRU5ErkJggg=="/>
        </a>
        </>
         
    )
}

export default Saudacao