// // 插入
// await this.app.mysql.insert('posts', { title: 'Hello World' }); 
// => INSERT INTO `posts` (`title`) VALUES('Hello World');

// // 查询
// await this.app.mysql.get('posts', { id: 12 });
// => SELECT * FROM `posts` WHERE `id` = 12;

// // 自定义 SQL 语句
// await this.app.mysql.query('update posts set hits = (hits + ?) where id = ?', [1, postId]);
// => update posts set hits = (hits + 1) where id = 1;

// // 删除
// await this.app.mysql.delete('posts', { author: 'fengmk2'});
// => DELETE FROM `posts` WHERE `author` = 'fengmk2';

// // 更新
// const row = {
//   name: 'fengmk2',
//   otherField: 'other field value',    // any other fields u want to update
// };

const Service = require('egg').Service;

class UserService extends Service {
	async find(uid) {
		// 假如 我们拿到用户 id 从数据库获取用户详细信息
		const sql = 'SELECT * FROM kxmt_goods WHERE goods_name LIKE "%水果%" LIMIT 10'
		const user = await this.app.mysql.query(sql);

		return {
			user
		};
	}
}

module.exports = UserService;