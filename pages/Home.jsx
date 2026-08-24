import "../pages/Pages.css"
import about from "..//src/assets/img/about.jpg"
import plan from "..//src/assets/img/plan.png"
function Home() {
    return(
        <div className="home">
<div className="homeleft">
<h1>
    Your AI Travel Plan in <span className="hometext"> Seconds </span>
</h1>
<img src={plan}  alt="" className="plantext" />
</div>
<div className="homeright">
<img src={about} alt="" />
</div>
        </div>
    )
}
export default Home