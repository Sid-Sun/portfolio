import React, {PureComponent} from 'react';

export default class Project extends PureComponent {
    render() {
        return (
            <div className="tableView-projects container rounded-lg col-md-6">
                <h4 className="pt-3">
                    {this.props.name}
                </h4>
                <p className="lead">
                    {this.props.description}
                </p>
                <div className="px-lg-2">
                    {/*<span className="col-md px-2">*/}
                    {/*    <NavLink to={"/projects/" + this.props.project}*/}
                    {/*             className="btn btn-lg btn-outline-primary mb-3">*/}
                    {/*        Find out more!*/}
                    {/*    </NavLink>*/}
                    {/*</span>*/}
                    <span className="col-md px-2">
                        <a href={this.props.url}
                           className="btn btn-lg btn-outline-secondary mb-3">
                            Explore on GitHub
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}
