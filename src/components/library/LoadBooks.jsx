import { SimpleGrid } from "@chakra-ui/react"
const LoadCards = () => {
    const elementItems = [1, 2, 3,4].map(( index) => (
        <div className="load-card mx-1" key={index}>
        <svg className="w-[100%] h-[400px]"  viewBox="0 0 408 353" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>cards / loading</title>
            <g id="cards-/-loading" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <rect id="wrapper" stroke="#F0F1F2" strokeWidth={6} fill="#FFFFFF" x="3" y="3" width="402" height="400" rx="12" />
                <path d="M12,0 L395,0 C401.627417,-1.21743675e-15 407,5.372583 407,12 L407,229 L0,229 L0,12 C-8.11624501e-16,5.372583 5.372583,1.21743675e-15 12,0 Z" id="frame" fill="#F0F1F2" />
                <rect id="text" fill="#F0F1F2" x="29" y="253" width="271" height="16" rx="8" />
                <rect id="text" fill="#F0F1F2" x="29" y="281" width="191" height="16" rx="8" />
                <rect id="text" fill="#F0F1F2" x="29" y="309" width="121" height="16" rx="8" />
            </g>
        </svg>
    </div>
    ));
    return (
        <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250} className='shop-card' >
            {elementItems}
        </SimpleGrid>
    )
}

export default LoadCards