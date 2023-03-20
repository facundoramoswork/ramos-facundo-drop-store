import './style.css';

const ItemCount = ({count, setCount})=> {
    const onAdd = ()=> {
        setCount (count + 1);
    };

    const onSubst = ()=> {
        if (count === 0){
            return;
        }
        setCount (count - 1);
    }


return (
    <div className='counter'>
        <div className='controles'>
            <button onClick={onSubst}>ELIMINAR UNO</button>
            <div>
                <span>{count}</span>
            </div>
            <button onClick={onAdd}>AGREGAR UNO</button>
        </div>
    </div>
)
};

export default ItemCount;