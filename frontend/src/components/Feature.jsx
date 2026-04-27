import { useInView } from "../hooks/useInView";
function Feature({title,desc,points,imag,reverse}) {
  const [ref, visible] = useInView();
    return (
      <section ref={ref} className={`feature ${reverse ? "reverse" : ""} ${visible ? "show" : ""}`}>
        <div className="feature-text">
          <h2>{title}</h2>
          <p>{desc}</p>
  
          <ul>
            {points.map((item,index)=>(
              <li key = {index}>{item}</li>
            ))}
          </ul>
        </div>
  
        <img src={imag} alt="feature" />
      </section>
    );
  }
  
export default Feature;