export default defineEventHandler(async (event) => {

    const { number } = event.context.params;

    const result = number * number;

    return {
        message: `${number} * ${number} = ${result}`,
        result: result
    }

});