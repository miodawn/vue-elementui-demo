<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="id" label="编号"></el-table-column>
            <el-table-column prop="name" label="书名"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                :page-size=pageSize
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            edit(row) {
                this.$router.push({
                    path: '/update',
                    query: {
                        id: row.id
                    }
                })
            },
            deleteBook(row) {
                const _this = this
                axios.delete('http://localhost:8181/book/deleteById/' + row.id).then(function () {
                    _this.$message('《' + row.name + '》删除成功')
                    // _this.$router.push('/BookHome')//本页无法跳转，只能刷新
                    window.location.reload()

                })
            },
            page(currentPage) {
                const _this = this
                axios.get('http://localhost:8181/book/findAll/' + currentPage + '/' + _this.pageSize).then(function (resp) {
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findAll/1/' + _this.pageSize).then(function (resp) {
                _this.tableData = resp.data.content
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
            })
        },
        data() {
            return {
                pageSize: 7,// 每页行数
                total: null,// 总数
                tableData: []
            }
        }
    }
</script>