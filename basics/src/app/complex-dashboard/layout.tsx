export default function ComplexDashboardLayout({
    children,
    userMetrics,
    revenue,
    notifications
}:{
    children:React.ReactNode;
    userMetrics:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
    
}){
    return (
        <>
        <div>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>{revenue}</div>
                <div>{userMetrics}</div>
            </div>
            <div style={{display:"flex",flex:1}}>{notifications}</div>
        </div>
        </>
    )
}