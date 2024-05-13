# local 

`0.1.0` 

封装了localStorage的操作函数，提供了get、set、remove、clear等方法。

## 基本用法
### get
```typescript 
import { local } from 'roodash';

localStorage.setItem('localKey', JSON.stringify({ name: 'roodash' }));

local.get('localKey');
// => { name: 'roodash' }
```

### set
```typescript
import { local } from 'roodash';

local.set('localKey', { name: 'roodash' });

localStorage.getItem('localKey');
// => { name: 'roodash' }
```

### remove
```typescript
import { local } from 'roodash';

localStorage.setItem('localKey', JSON.stringify({ name: 'roodash' }));

local.remove('localKey');

localStorage.getItem('localKey');
// => null
```

### clear
```typescript
import { local } from 'roodash';

localStorage.setItem('localKey', JSON.stringify({ name: 'roodash' }));

local.clear();

localStorage.getItem('localKey');
// => null
```
