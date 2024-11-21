
// ////////////// Cah1   goi  console.js tung bien ra mot
import{
  TYPE_LOG,
  TYPE_WARN,
  TYPE_ERROR
} from './consolog.js';
import logger from './logger.js';

logger('Thanhtung Test message...', TYPE_LOG);
logger('Thanhtung Test message...', TYPE_WARN);
logger('Thanhtung Test message...', TYPE_ERROR);

/////////////////  Cach2  goi console.js tat ca ra
import* as con from './consolog.js';
logger('Thanhtung Test message...',  con.TYPE_ERROR)
logger('Thanhtung Test message...',  con.TYPE_LOG)
logger('Thanhtung Test message...',  con.TYPE_WARN)

// ==>  Với cách 2 thì nó sẽ ngắn gọn hơn!
// Sự khác biêy