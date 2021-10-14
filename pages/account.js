import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Account.module.css'

import AuthContext from "../context/AuthContext";
import { API_URL } from '../utils/urls'

export default function Account() {
    const { user, logoutUser } =useContext(AuthContext)

    if(!user){
        return (
            <div>
                <p>Please Login or Register</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }
    return (
        <div>
            <Head>
                <title>Account Page</title>
                <meta name="description" content="account page view orders" />
            </Head>

            <h2>Account page</h2>
            <a href="#" onClick={logoutUser}>Logout</a>
        </div>
    )
}
const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            if(user){
                try{
                    const token = await getToken()
                    const orderRes = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await orderRes.json()
                    setOrders(data)
                } catch(err){
                    setOrders([])
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])



//    return {orders, loading}
//}

// const Account = () => {

//     const { user, logoutUser, getToken} = useContext(AuthContext)

//     const { orders, loading } = useOrders(user, getToken)
    
//     if(!user){
//         return (
//             <div className={styles.notuser}>
//                 <p>Please Login or Register before accessing this page</p>
//                 <Link href="/"><a>Go Back</a></Link>
//             </div>
//         )
//     }

     return (
        <div>
            <Head>
                <title>Your Account</title>
                <meta name="description" content="Your orders will be shown here" />
            </Head>
            <h2 className={styles.pagetitle} > Account Page </h2>
            
            
            <h3 className={styles.meaty}>Your Orders</h3>
            {loading && <p className={styles.inas}>Orders are Loading</p>}
            {orders.map(order => (
                <div key={order.id}>
                    {new Date(order.created_at).toLocaleDateString( 'en-EN' )} {order.product.name} ${order.total} {order.status}
                </div>
            ))}
            <hr />
            <p className={styles.inas}>Logged in as {user.email}</p>
            
            <p className={styles.inas}><a href="#" onClick={logoutUser}>Logout</a></p>
        </div>
     )

 };
