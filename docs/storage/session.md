# session

`0.1.0`

封装了sessionStorage的操作函数，提供了get、set、remove、clear等方法。

## 基本用法
### get
```typescript 
import { session } from 'roodash';

sessionStorage.setItem('sessionKey', JSON.stringify({ name: 'roodash' }));

session.get('sessionKey');
// => { name: 'roodash' }
```

### set
```typescript
import { session } from 'roodash';

session.set('sessionKey', { name: 'roodash' });

sessionStorage.getItem('sessionKey');
// => { name: 'roodash' }
```

### remove
```typescript
import { session } from 'roodash';

sessionStorage.setItem('sessionKey', JSON.stringify({ name: 'roodash' }));

session.remove('sessionKey');

sessionStorage.getItem('sessionKey');
// => null
```

### clear
```typescript
import { session } from 'roodash';

sessionStorage.setItem('sessionKey', JSON.stringify({ name: 'roodash' }));

session.clear();

sessionStorage.getItem('sessionKey');
// => null
```
