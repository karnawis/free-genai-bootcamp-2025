const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className=" font-bold  text-slate-500">© { year } - sura.me -  All rights reserved</p>
        </footer>
    )
}

export default Footer