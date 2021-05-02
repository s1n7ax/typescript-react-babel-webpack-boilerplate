if (process.env.ENV === 'dev'.toLocaleLowerCase()) {
    require('@babel/register')({
        extensions: ['.js', '.ts'],
    });

    require('./src/index.ts');
} else {
    require('./src/index.ts');
}
