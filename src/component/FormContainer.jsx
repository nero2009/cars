import React from 'react';

const FormContainer = (props) => {
    console.log(props)
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-default card-view panel-refresh">
                    <div className="panel-heading">
                        <div className="clearfix"></div>
                    </div>
                    <div className="panel-wrapper collapse in">
                        <div className="panel-body">
                            <form>
                                {props.children}
                            </form>
                        </div>
					</div>
				</div>
						
			</div>
		</div>
    );
};

export default FormContainer;