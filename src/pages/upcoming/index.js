import Card from "../../components/Card";
import MatchLink from "./components/MatchLink";
import Tabs from "./components/Tabs";

export default function () {
    return (
        <>
            <div className="text-center">
                <Tabs />
            </div>
            <div className="m-4">
                <MatchLink />
            </div>

            <Card />
        </>
    )
}