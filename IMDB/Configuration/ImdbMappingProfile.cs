using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using IMDB.Data.Dto;
using IMDB.Data.Entities;

namespace IMDB.Configuration
{
    public class ImdbMappingProfile : Profile
    {
        public ImdbMappingProfile()
        {
            CreateMap<Movie, MovieDto>()
                    .ForMember(dto => dto.Cast, opt => opt.MapFrom(x => x.Cast.Select(a => a.Actor)))
                    .ForMember(dto => dto.ProducerName, opt => opt.MapFrom(x => x.ProducerName));
            CreateMap<MovieActor, MovieDetailsDto>()
                    .ForMember(res => res.Id, opt => opt.MapFrom(dto => dto.Movie.Id))
                    .ForMember(res => res.Name, opt => opt.MapFrom(dto => dto.Movie.Name));

            CreateMap<Producer, ProducerDto>();

            CreateMap<Actor, CastDto>()
                    .ForMember(res => res.Movies, opt => opt.MapFrom(dto => dto.Movies.Select(a => a.Movie)));
            CreateMap<Movie, MovieDetailsDto>()
                    .ForMember(res => res.Id, opt => opt.MapFrom(dto => dto.Id))
                    .ForMember(res => res.Name, opt => opt.MapFrom(dto => dto.Name));
        }
    }
}
