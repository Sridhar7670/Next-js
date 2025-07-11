import { Card } from "@/components/card";
import Link from "next/link";

export default function Notificatons(){
    return (<>
    <Card>
        <div>Notifications</div>
        <div>
            <Link href="/complex-dashboard/archived" >Go to Archived</Link>
        </div>
    </Card>

    </>)
}