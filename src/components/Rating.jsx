
export default function Rating({ children }) {

const renderStars = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        if (i >= Math.round(children)) {
            result.push("\u2606");
        } else {
            result.push("\u2605");
        }
    }
    return result.join("");
};
    return (
        <div className="rating">{renderStars()}</div>
    );
    
}