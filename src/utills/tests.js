
import checkPropTypes from 'check-prop-types';



export const findByTestAtrr =(component, attr) => { 
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

  

export const checkProps = (component , conformingProps) => { 
    const propsError= checkPropTypes(component.propTypes
        ,conformingProps 
        , 'prop' 
        , component.name )
        expect(propsError).toBeUndefined()

}
