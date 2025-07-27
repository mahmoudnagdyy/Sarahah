import QRcode from 'qrcode'


export const generateQRcode = async (data) => {
    const qrcode = await QRcode.toDataURL(JSON.stringify(data), {errorCorrectionLevel: 'H'})
    return qrcode
}