import React, { useState } from 'react'
import "./QRcode.css"

const QRcode: React.FC = () => {

    const [image, setimage] = useState("")
    const [loading, setloading] = useState(false)
    const [qrdata, setqrdata] = useState("https://Kavi.in/")
    const [qrsize, setqrsize] = useState("150")

    const GenerateQR = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setloading(true)
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setimage(url)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setloading(false)
        }
    }

    const Dowanloadalert = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fetch(image).then((response) => response.blob()).then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        })
    }
    return (
        <form className='form'>QR Code GENERATOR
            <div className='appcontainer'>
                {loading && <p>Please wait...</p>}
                {image && <img src={image} className='image' />}
                <label htmlFor='datainput' className='input-label'>Data For QR Code</label>
                <input type='text' value={qrdata} onChange={(e) => setqrdata(e.target.value)}></input>
                <label htmlFor='sizeinput' className='input-label'>Image size</label>
                <input type='text' value={qrsize} onChange={(e) => setqrsize(e.target.value)}></input>
                <button onClick={GenerateQR} disabled={loading}>Generate QR Code</button>
                <button onClick={Dowanloadalert}>Download QR Code</button>


            </div>
        </form>
    )
}

export default QRcode