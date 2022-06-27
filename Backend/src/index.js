import app from './app.js';
import { mongoConnect } from './util/database.js';

mongoConnect(() => app.listen(app.get('port'), () => console.log('Server on port ', process.env.PORT)));