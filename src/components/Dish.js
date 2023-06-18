export default function Dish(props){
    const {title, image, children} = props;
    return (
        <div className="dish">
            <img src={image} alt={image}/>
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}