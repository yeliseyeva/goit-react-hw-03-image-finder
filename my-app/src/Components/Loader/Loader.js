import NewLoader from "react-loader-spinner";

function Loader () {
    return (
        <div className="spinner">
            <NewLoader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}/>
        </div>
    )
}

export default Loader