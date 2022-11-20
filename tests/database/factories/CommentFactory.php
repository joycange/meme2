<?php

namespace Filament\Tests\Database\Factories;

use Filament\Tests\Models\Post;
use Filament\Tests\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        return [
            'author_id' => User::factory(),
            'post_id' => Post::factory(),
            'content' => $this->faker->paragraph(),
            'is_published' => $this->faker->boolean(),
            'tags' => $this->faker->words(),
            'title' => $this->faker->sentence(),
        ];
    }
}
