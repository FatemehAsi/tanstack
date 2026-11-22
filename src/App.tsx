import {useStat, Suspense} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {BrrowserRouter, Route, Routes} from
import {HomePage} from "./pages";


const queryClient = new QueryClient()

function App() {


    return (
        <QueryClientProvider client={queryClient}>
            <BrrowserRouter>
                <Routes>
                    <Route path="/" element={<Suspense><HomePage /></Suspense>}/>
                </Routes>

            </BrrowserRouter>
        </QueryClientProvider>

    )
}

export default App;
