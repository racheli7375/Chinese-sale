import react from 'react'
import { useSelector } from 'react-redux'

export default function AllDonations() {
    const arr = useSelector((state) => state.donations);
    return (
        <table className="table caption-top">

            <thead>
                <tr>

                    <th scope="col">קוד</th>
                    <th scope="col">סכום התרומה</th>
                    <th scope="col">אופן התרומה</th>
                </tr>
            </thead>
            <tbody>
                {

                    arr.map((x, index) =>
                        <tr key={index}>
                            <th >{index + 1}</th>
                            <td>{x.sum}</td>
                            <td>{x.kindOfPay}</td>
                        </tr>)
                }
            </tbody>
        </table>

    )
}