import { Value } from '../../types/Value';

interface Props {
    item: Value,
}

export const Field: React.FC<Props> = (props) => {
  const {item} = props;
  return (
   <div className="diagrammas-field">
     <h2 className="field-title">{item.name}</h2>
     <div className="field-wrapper">
       <div
         className="value-position"
         style={{ 
              width:`${item.time}%`, 
              left: `${item.indent}%` 
            }}
        >
          {item.time}
        </div>
      </div>
    </div>
  )
}