
import WalletForm from "../../../components/WalletForm";



export default async function() {


    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
           Wallet Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <WalletForm />
            </div>
           
        </div>
    </div>
}