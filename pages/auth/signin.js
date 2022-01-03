import { getProviders, signIn as signInToProvider } from 'next-auth/react';
import Header from '../../components/HeaderComponents/Header';

//client side
function signIn({ providers }) {
    return (
        <div>
            <Header />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signInToProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

//middle server side
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers: providers
        }
    }
}

export default signIn;
