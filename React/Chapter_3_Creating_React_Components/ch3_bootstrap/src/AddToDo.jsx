export default function AddToDo() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div>
                        <input type="text" class="text"/> 
                    </div>
                </div>
                <div class="col">
                    <input type="date"/>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-success">Add</button>
                </div>
            </div>

        </div>
    )
}