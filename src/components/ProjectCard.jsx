import React from 'react'


export default function ProjectCard({project}){
return (
<article className="bg-white shadow-sm rounded-lg overflow-hidden">
<img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
<div className="p-4">
<h3 className="font-semibold text-lg">{project.title}</h3>
<p className="text-sm mt-2">{project.description}</p>
<div className="mt-3 text-xs text-gray-600">Stack: {project.stack.join(' • ')}</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-indigo-600 text-sm" href={project.repo} target="_blank" rel="noreferrer">View code</a>
{project.demo && <a className="text-sm" href={project.demo} target="_blank" rel="noreferrer">Live demo</a>}
</div>
</div>
</article>
)
}