import { useState } from "react"
import { Button } from "../Button/Button";


export const Count = ({ cantidad, setCount, maxStock }) => {
        return (
        <div>
            <Button text="-" functionClick={() => setCount(cantidad > 1 ? cantidad - 1 : 1)}/>
            <strong className="p-3">{cantidad}</strong>
            <Button text="+" functionClick={() => setCount(cantidad >= maxStock ? maxStock : cantidad + 1)}/>
        </div>
        );
};